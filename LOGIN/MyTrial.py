quick_brown_fox = 'the quick brown fox jumped over the lazy dog'
vowels = [v for v in quick_brown_fox if v in 'aeiou']
print(vowels)

quick_brown_fox = 'the quick brown fox jumped over the lazy dog'
vowels = 'aeiou'
for vowels in quick_brown_fox:
    if vowels in 'aeiou':
        print(list(vowels)

owners_names = ["Jenny","Sam","Alexis"]
dogs_names = ["Elphonse","peace","carter"]
owners_dogs = zip(owners_names, dogs_names)
print(list(owners_dogs))