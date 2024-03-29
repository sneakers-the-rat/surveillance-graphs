import pypandoc
from pathlib import Path
import typing
import re
import pdb

def replace_includes(text:str) -> str:
    """
    inline text from included markdown files, see :func:`.include`
    """
    pattern = r'\{% include_relative\s(.*)\s%\}'
    while re.search(pattern, text):
        text = re.sub(pattern, include, text)
    return text

def fix_citations(text:str) -> str:
    # fix cite calls
    text = re.compile(r'(?s)\\\{\\%[^\\]*cite(.*?)\\%\\\}').sub(r'\\cite{\1} ', text)
    # fix cites spearated with space not comma
    text = re.compile(r"(?s)(?<=\\cite\{).*?\s.*?(?=\})").sub(split_cites, text)
    return text

def jekyll_to_tex(
    path: typing.Union[Path, str], 
    output: typing.Optional[typing.Union[Path, str]]=None,
    document_class: str = "article",
    document_class_options:list= [],
    date:str = "\\today",
    load_packages: list = [],
    additional_calls: list = [()],
    domain: typing.Optional[str] = None,
    img_root: typing.Optional[str] = None,
    strip:typing.Optional[list]=None,
    replace: typing.Optional[typing.List[typing.Tuple[str,str]]]=None):

    path = Path(path)
    if output is not None:
        output = Path(output).with_suffix('.tex')

    with open(path, 'r') as tfile:
        text = tfile.read()

    # prestrip headings for references and footnotes
    text = re.sub(r'# References', '', text)
    text = re.sub(r'# Footnotes', '', text)

    # replace relative includes
    text = replace_includes(text)

    text = pypandoc.convert_text(
        text, 
        format='markdown', 
        to='tex', 
        extra_args=[
            "--highlight-style=pygments",
        ]
    )

    # replace markdown-style citations with latex \cite
    text = fix_citations(text)

    if domain is not None or img_root is not None:
        text = fix_relative_links(text, domain, img_root)

    if strip is not None:
        for to_strip in strip:
            text = re.compile(to_strip).sub('', text)

    if replace is not None:
        for to_replace in replace:
            text = re.compile(to_replace[0]).sub(to_replace[1], text)

    if output is not None:
        with open(output, 'w') as out_f:
            out_f.write(text)

    return text


def include(match):
    path = (Path(__file__).parent.parent).resolve() / match.groups()[0]
    with open(path, 'r') as includef:
        include_text = includef.read()
    return include_text


def split_cites(match):
    match_text = str(match.group(0).strip())
    splitted = [cite.strip() for cite in re.split(r'\s|\n', match_text) if len(cite)>0]
    return ', '.join(splitted)


def tex_call(function, argument=None):
    if argument is None:
        return f"\\{function}"
    else:
        return f"\\{function}{{{argument}}}"


def fix_relative_links(text, href=None, includegraphics=None):
    # fix \href{/link}
    if href is not None:
        text = re.compile(r'(?<=\\href\{)(/[^}]*)').sub(fr'{href}\1', text)
    # and \includegraphics{/link}
    if includegraphics is not None:
        text = re.compile(r'(?<=\\includegraphics\{)(/[^}]*)').sub(fr'{includegraphics}\1', text)
    return text


if __name__ == "__main__":
    in_fn = (Path(__file__).parent / '../index.markdown').resolve()
    out_fn = (Path(__file__).parent / './src/index.tex').resolve()

    print(f'Converting {in_fn} to .tex...')

    text = jekyll_to_tex(
        in_fn,
        document_class='dissertation',
        document_class_options=['nohyper'],
        date="\\today",
        load_packages=[],
        additional_calls=[('addbibresource', '../assets/infrastructure.bib')],
        domain='https://jon-e.net',
        strip=(r'\\tightlist',),
        replace=(
            (r'/surveillance-graphs/assets/', ''),
            (r'(?<=\\includegraphics)(\{[^}]*})', r'[width=\\linewidth]\1'),
            (r'\.svg', '.png'),
            (r'(?s)\\footnote', r'\\sidenote')
            ),
        output=out_fn
        )


    #text = re.compile(r'(?<=\\includegraphics\{)/blog([^}]*)').sub(fr'{"/Users/jonny/git/sneakers-the-rat.github.io/_preblog"}\1', text)
    # text = re.compile(r'\\begin\{quote\}').sub(r'\\begin{leftbar}', text)
    # text = re.compile(r'\\end\{quote\}').sub(r'\\end{leftbar}', text)
    #text = re.compile(r'(?<=\\includegraphics)(\{[^}]*})').sub(r'[width=\\linewidth]\1', text)
    # fix relative links to images
    #text = re.compile(r'(?<=\\includegraphics\[width=\\linewidth\]\{)/infrastructure').sub(r'..', text)
    # strip that one \cite{d} that always shows up
    #text = re.compile(r"\\cite\{d\}").sub('', text)
    # svg to png
    #text = re.compile(r"\.svg").sub(r'.png', text)



    # with open(out_fn, 'w') as out_f:
    #     out_f.write(text)

    print(f'Wrote tex to {out_fn}')


