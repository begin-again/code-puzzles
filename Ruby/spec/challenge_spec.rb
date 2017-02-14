require 'spec_helper'
require 'challenge_code'

include Challenge

data1 = '86,2,3'
data2 = '125,1,2'

describe 'Stuff' do
   it 'should not throw an error' do
    expect{ challenge(data1) }.not_to raise_error
    expect{ challenge(data2) }.not_to raise_error
  end
  it 'shoud work 1' do
    expect( challenge(data1)).to be true
  end
  it 'shoud work 2', focus: true do
    expect( challenge(data2)).to be false
  end
end
