# Template
myfile = ARGV[0]

d = /^[A-Z]$/i
if File.exists?(myfile)
  File.open(myfile) do |file|
    file.each_line do |line|
      # Sort and obtain frequency map
      x = line.split('').select{|e| d.match(e) }.collect{|e| e.downcase}
      m = Hash.new(0)
      x.each{|e| m[e] += 1}
      # Compute the beauty; on inject ruby needs the summation bit last so beauty set to 27 initially
      beauty = 27
      puts m.values.sort.reverse.inject(0){|sum, e| beauty -= 1; sum += beauty * e }
    end
  end
end
