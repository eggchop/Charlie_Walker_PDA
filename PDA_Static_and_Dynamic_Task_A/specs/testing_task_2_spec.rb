require ('minitest/autorun')
require ('minitest/rg')
require_relative '../testing_task_2.rb'
require_relative '../card.rb'

class CardGameTest < MiniTest::Test
  def setup
    @card1 = Card.new('spade', 3)
    @card2 = Card.new('diamond', 5)
    @card3 = Card.new('club', 1)
    @cards = [@card1,@card2,@card3]
    @cardgame1 = CardGame.new()
  end

  def test_check_for_ace
    result = @cardgame1.check_for_ace(@card3)
    assert_equal(true, result)
  end

  def test_highest_card
    assert_equal(@card2, @cardgame1.highest_card(@card1, @card2))
  end

  def test_self_cards_total
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of 9", result)
  end
end
