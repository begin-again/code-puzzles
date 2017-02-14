# Template

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
    x = line.split('|')
    out = ""
    x.last.strip.split(' ').collect{|e| e.to_i}.each do |e|
      out += x.first[e-1]
    end
    puts out
  end
end




