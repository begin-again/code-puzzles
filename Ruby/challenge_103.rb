# challenge 103
# A player wins if his number is the lowest unique.
# Print a winner's position or 0 in case there is no winner.

#
require 'byebug'
class Player

  attr_accessor :freq
  attr_reader :score
  attr_reader :position

  def initialize pos, score
    @score = score
    @freq = 1
    @position = pos
  end
end

myfile = ARGV[0]
if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
    x = line.split(' ').map{|e| e.to_i}
    players = Array.new
    x.each_with_index {|e,i| players << Player.new(i+1, e) }
    m = Hash.new(0)
    players.each {|player| m[player.score] += 1}
    best_score = m.reject{|k,v| v > 1}.keys.sort.first.to_i
    if best_score == 0
      puts 0
    else
      puts players.select{|player| player.score == best_score}.first.position
    end
  end
end


