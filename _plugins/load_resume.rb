require 'json'

module Jekyll
    class LoadResumeJson < Generator
        safe true

        def generate(site)
        file_path = File.join(site.source, 'assets', 'json', 'resume.json')
        if File.exist?(file_path)
            file = File.read(file_path)
            site.data['resume'] = JSON.parse(file)
            Jekyll.logger.info "Resume JSON file loaded successfully:", file_path
        else
            Jekyll.logger.warn "Resume JSON file not found:", file_path
        end
        end
    end
end