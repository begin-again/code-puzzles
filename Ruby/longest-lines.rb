# https://www.codeeval.com/open_challenges/2/
myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile,"r") do |file|
    num_lines = file.gets.to_i
    lines = []
    file.each_line {|line| lines << line}
    lines.sort_by{|e| e.size }.reverse.each do |l|
      puts l
      num_lines -= 1
      break if num_lines == 0
    end
  end
end
