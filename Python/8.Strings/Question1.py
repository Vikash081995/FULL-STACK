# Capitalize the word starting with 'm'
song = """When an eel grabs your arm,
... And it causes great harm,
... That's - a moray!"""


def capitalize_m_words(text):
    words = text.split()
    capitalized_words = []
    for word in words:
        if word.startswith("m"):
            capitalized_words.append(word.capitalize())
        else:
            capitalized_words.append(word)
    return " ".join(capitalized_words)


# Apply the function to the song
capitalized_song = capitalize_m_words(song)
print(capitalized_song)
