# This implementation is prototypical due to some issues with the 
# console tool RVM.
#$LOAD_PATH << "/Users/tom/.rvm/gems/ruby-1.9.2-p290/gems/sinatra-1.3.3/lib"
#$LOAD_PATH << "/Users/tom/.rvm/gems/ruby-1.9.2-p290/gems/rack-1.4.1/lib"
#$LOAD_PATH << "/Users/tom/.rvm/gems/ruby-1.9.2-p290/gems/tilt-1.3.3/lib"
#$LOAD_PATH << "/Users/tom/.rvm/gems/ruby-1.9.2-p290/gems/rack-protection-1.2.0/lib"

require "sinatra"
require "open-uri"

set :public_folder, Dir.pwd


# Register a block for the url "/lookup".
# This expects a parameter url to contain the
# lookup target for this request.

get "/lookup/" do
  case params[:url]
    when "http://rdfs.org/ns/void"
      open("./bin/void.ttl.txt").read
    else
      puts params[:url]
      exit
      open(params[:url]+".ttl").read if params[:url]
  end
end


