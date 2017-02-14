
myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
    _left_arrow = '<--<<'
    _right_arrow = '>>-->'
    matches = 0
    0.upto(line.size - 1) do |i|
      t = line.slice(i, 5)
      matches += 1 if t == _left_arrow || t == _right_arrow
    end
    puts matches
  end
end
