require 'json'

module Jekyll
    class LoadProjectJson < Generator
        safe true

        def generate(site)
        file_path = File.join(site.source, 'assets', 'json', 'project.json')
        if File.exist?(file_path)
            file = File.read(file_path)
            site.data['project'] = JSON.parse(file)
            Jekyll.logger.info "Project JSON file loaded successfully:", file_path
        else
            Jekyll.logger.warn "Project JSON file not found:", file_path
        end
        end
    end
end