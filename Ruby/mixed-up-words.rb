# Mixed up words
# replace non alpha groups with single space
myfile = ARGV[0]
#d = /(\W|\d|_)+/
d = /([A-Z])+/i
if File.exists?(myfile)
  File.open(myfile) do |file|
    file.each_line do |line|
      #puts line.gsub(d, ' ').strip
      puts line.split(/([^A-Z])+/i).select{|e| d.match(e)}.join(' ')
    end
  end
end
