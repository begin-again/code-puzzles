# Given numbers x and n, where n is a power of 2,
# print out the smallest multiple of n which is greater than or equal to x.
# Do not use division or modulo operator.

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?

  end
end




