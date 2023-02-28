# Make a total of open knowledge network funding
# Data from this query: 
# https://www.nsf.gov/awardsearch/advancedSearchResult?PIId=&PIFirstName=&PILastName=&PIOrganization=&PIState=&PIZip=&PICountry=&ProgOrganization=15000000&ProgEleCode=095Y%2C096Y&BooleanElement=Any&ProgRefCode=&BooleanRef=All&Program=&ProgOfficer=&Keyword=&AwardNumberOperator=&AwardAmount=&AwardInstrument=&ActiveAwards=true&ExpiredAwards=true&OriginalAwardDateOperator=After&OriginalAwardDateFrom=02%2F01%2F2018&StartDateOperator=&ExpDateOperator=

import pandas as pd
df = pd.read_csv('nsf_ca-hdr_convergence_accelerator.csv',
  encoding_errors='ignore'
)

# Fix numbers
df['AwardedAmountToDate'] = df['AwardedAmountToDate'].str.strip('$').str.replace(',','').astype(float)
print(df['AwardedAmountToDate'].sum())
# 92256730.0