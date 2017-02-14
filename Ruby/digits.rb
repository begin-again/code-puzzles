# Sum of Digits
# Input: File of integers, 1 per line
# Output: Console print the sum of all digits, one line for each line in file

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile) do |file|
    file.each_line do |line|
      puts line.split('').inject(0){ |sum, e| sum + e.to_i}
    end
  end
end
