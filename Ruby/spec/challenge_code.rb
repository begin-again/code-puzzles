
module Challenge

  def challenge line
    x = line.split(',').map(&:to_i)
    bits = x.first.to_s(2)
    bits[ 0-x[1] ] == bits[ 0-x[2] ]
  end
end
