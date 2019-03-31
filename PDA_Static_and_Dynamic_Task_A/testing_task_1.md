### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  def checkforAce(card) # should be consistent format - snake_case for ruby
    if card.value = 1 # there should be a == here for a boolean condition
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # dif should read def, there should be comma between card1 and card2
  if card1.value > card2.value
    return card.name # which card? need to specifiy card1 or card2
  else
    card2 # should be 'return card2'
  end
end # bad indentation - everything above within this method sould be tabbed right
end # this end arrives too early, it should come after the method below

def self.cards_total(cards)
  total # needs to be set to a value
  for card in cards
    total += card.value
    return "You have a total of" + total #total needs to be converted to a string
  end
  # return statement above should go here.
end


```
