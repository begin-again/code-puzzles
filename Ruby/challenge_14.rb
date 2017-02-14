=begin

STRING PERMUTATIONS

CHALLENGE DESCRIPTION:

Write a program which prints all the permutations of a string in alphabetical order.
We consider that digits < upper case letters < lower case letters.
The sorting should be performed in ascending order.

INPUT SAMPLE:

Your program should accept a file as its first argument. The file contains input strings, one per line.

=end

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
    puts line.split('').permutation.to_a.collect{|e| e.join('')}.sort.join(',')
  end
end
