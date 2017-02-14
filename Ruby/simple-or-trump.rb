# SIMPLE OR TRUMP
# Ace beats 2 unless its a trump 2
#
# Card1 Card 1 | Trump Suite {H S C D}
# AD 2H | H => 2H
# KD KH | C => KD KH
# JH 10S | C => JH

myfile = ARGV[0]

Faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
cards = {}
suits.each do |s|
  Faces.each do |f|
    cards[s.to_sym] << f 
  end
end


def card_value c 
  f = c.slice(0, c.size - 1)
  Faces.find_index(f)
end

# returns either 1 or 2 cards
def trumps h1, h2, t 
  c = []
  c << h1 if h1.slice(-1) == t 
  c << h2 if h2.slice(-1) == t 
  c
end

if File.exists?(myfile)
  File.open(myfile) do |file|
    file.each_line do |line|
      data = line.split('|')
      
      trump = data[1] # H
      hand = data[0].split(' ').sort_by{|x| card_value(x)}.reverse # [AD 2H]


      t = trumps(hand[0], hand[1], trump)
      if 
      if card_value(hand[0]) == card_value(hand[1])

      if data[0].slice(-1) == data[2] && data[1].slice(-1) == data[2]
        puts "#{data[0]} #{data[1]}"
      elsif data[0].slice(-1) == data[2]

    end
  end
end
