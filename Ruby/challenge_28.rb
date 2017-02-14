# Template

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
    _left, _right, i = '', '', 0
    line.each_char do |c|
      break if c == ','
      i += 1
    end
    _left = line.slice(0, i)
    _right = line.slice( (i+1), (line.size - 1) )
    _right[0] = "[*]" if _right[0] == "*"
    r = Regexp.new(_right)
    puts r.match(_left).nil? == true ? 'false' : 'true'
  end
end


