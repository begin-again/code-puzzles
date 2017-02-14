# https://www.codeeval.com/open_challenges/29/
require 'byebug'
myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
    puts line.split(',').uniq.join(',')
  end
end
