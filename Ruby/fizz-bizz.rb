

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile) do |file|
    file.each_line do |line|
      input = line.split(" ").map{ |e| e.to_i }
      next if input.size == 0
      output = []
      1.upto(input[2]) do |i|
        a_char = ""
        a_char << "F" if i % input[0] == 0
        a_char << "B" if i % input[1] == 0
        output << (a_char.empty? ? i : a_char)
      end
      puts output.join(' ')
    end
  end
end

