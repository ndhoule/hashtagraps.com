# hashtagraps.com

Hashtag raps, when you need them.

## Requirements

- Docker (boot2docker on OS X)

Run `make` to build the Docker image, `make run` to run it.

## What's a Hashtag Rap?

I believe New York Times Magazine's immortal November 2, 2012 piece *[In Praise of the Hashtag][]* summarizes it best:

> Noted Twitterer Kanye West popularized the phrase "hashtag rap" a few years ago, to describe a hip-hop rhyme scheme that's been around longer than Twitter but echoes the way the hashtag compresses comparisons. In his 2009 hit "Forever," the rapper Drake sings, "Swimming in the money, come and find me — Nemo/If I was at the club you know I balled — chemo." If the metaphor serves to dispense with the simile's "like" or "as" — "Your face is a summer's day" rather than "Your face is like a summer's day" — then the hashtag strips the line down even further: "Your face. #summerday."

## API

### `/:name`

Gets a random hashtag rap from a rapper. See the [lyrics](lib/lyrics/) repository for a list of available rappers.

### `/random`

Gets a random hashtag rap from any rapper. See the [lyrics](lib/lyrics/) repository for a list of available rappers.


[In Praise of the Hashtag]: http://www.nytimes.com/2012/11/04/magazine/in-praise-of-the-hashtag.html?_r=0
