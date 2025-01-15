module Jekyll
  module Copyr
    class Copier
      DEFAULTS = { "enabled" => true, "tasks" => [] }.freeze

      def initialize(config = {})
        if config.is_a?(Hash)
          @config = Utils.deep_merge_hashes DEFAULTS, config
        else
          @config = nil
          Jekyll.logger.warn "Copyr:", "Expected a hash but got #{config.inspect}"
          Jekyll.logger.warn "", "Files will not be copied for this site."
        end
        @enabled = @config["enabled"]
        @tasks = @config["tasks"].map { |task_hash| Task.new task_hash }
      end

      def process_post_write
        return unless @enabled == true

        @tasks.each { |task| process task }
      end

      private

      def process(task)
        if File.file?(task.from)
          FileUtils.mkdir_p File.dirname(task.to)
          FileUtils.cp task.from, task.to
        else
          FileUtils.mkdir_p task.to
          FileUtils.cp_r task.from, task.to
        end
      end
    end

    class Task
      attr_accessor :from, :to

      def initialize(task_hash = {})
        @from = task_hash.fetch "from", nil
        @to = task_hash.fetch "to", nil
      end
    end
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  copier = Jekyll::Copyr::Copier.new site.config.fetch "copy", nil
  copier.process_post_write
end