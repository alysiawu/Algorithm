require "trie"

class ConcatenateWords
  attr_accessor :trie, :wordsList, :sortedWordsList, :Hashtable, :longestConcatWord, :secondlongestConcatWord, :totalCount

  def initialize
    @trie = Trie.new
    @wordsList = []
    @sortedWordsList = []
    @Hashtable = {}
    @longestConcatWord = ""
    @totalCount = 0
  end

  def read_file(file)
    File.open(file).each do |line|
      word = line.strip
      @wordsList.push(word)
      @trie.add(word,1)
    end
  end

  def sorted_list_by_length(list)
    list.sort do |a,b|
      b.length <=> a.length
    end
  end

 def find_concat_words(word, checked=false)
    if checked == false
      return @Hashtable[word] if @Hashtable.has_key?(word)
    end
    0.upto(word.length-1) do |index|
      str = word[0..index]
      if @trie.has_key?(str) && @trie.get(str) != 0
        if (word.length == index+1) || find_concat_words(word[(index+1)..(word.length-1)])
          @Hashtable[word] = true
          return true
        end
      end
    end
    @Hashtable[word] = false
    return false
  end

  def find_required_concat_word
    @sortedWordsList = sorted_list_by_length(@wordsList)
    @sortedWordsList.each do |word|
      @trie.add(word,0)
      checked = @Hashtable.has_key?(word)
      if find_concat_words(word,checked)
        @totalCount += 1
        if @longestConcatWord.empty?
          @longestConcatWord = word
        end
        if @totalCount==2
        @secondlongestConcatWord = word
      end
      end
      @trie.add(word,1)
    end
    puts "Longest concatenated word is:\n"
    puts @longestConcatWord
    puts "Second Longest concatenated word is:\n"
    puts @secondlongestConcatWord
    puts "Total concatenated words is:\n"
    puts @totalCount
  end

@test = ConcatenateWords.new
@test.read_file("wordsforproblem.txt")
puts @test.find_required_concat_word end

