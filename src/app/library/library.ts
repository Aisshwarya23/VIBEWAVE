import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Album {
  title: string;
  author: string;
  cover?: string;
  lyrics?: string;
}

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './library.html',
  styleUrls: ['./library.css']
})
export class Library {
  albums: Album[] = [
    { title: "Night Changes", author: "One Direction", cover: "c1.jpg", lyrics: `Going out tonight, changes into something red
Her mother doesn't like that kind of dress
Everything she's never had she's showing now
Driving too fast, moon is breaking through her hair
She said it was something that she won't forget
Having no regrets is all that she really wants
We're only getting older, baby
And I've been thinking about it lately
Does it ever drive you crazy
Just how fast the night changes?
Everything that you've ever dreamed of
Disappearing when you wake up
But there's nothing to be afraid of
Even when the night changes
It will never change me and you
Chasing her tonight, doubts are running 'round her head
He's waiting, hides behind his cigarette
Heart is beating loud, and she doesn't want it to stop
Movin' too fast, moon is lighting up her skin
She's fallin', doesn't even know it yet
Having no regrets is all that she really wants
We're only getting older, baby
And I've been thinking about it lately
Does it ever drive you crazy
Just how fast the night changes?
Everything that you've ever dreamed of
Disappearing when you wake up
But there's nothing to be afraid of
Even when the night changes
It will never change me and you
Ooh-ooh-ooh-ooh-ooh
Ooh-ooh-ooh-ooh-ooh
Going out tonight, changes into something red
Her mother doesn't like that kind of dress
Reminds her of the missing piece of innocence she lost
We're only getting older, baby
And I've been thinking about it lately
Does it ever drive you crazy
Just how fast the night changes?
Everything that you've ever dreamed of
Disappearing when you wake up
But there's nothing to be afraid of
Even when the night changes
It will never change, baby
It will never change, baby
It will never change me and you` },
    { title: "Fine Line", author: "Harry Styles", cover: "c2.jpg", lyrics: `Put a price on emotion
I'm looking for something to buy
You've got my devotion
But man, I can hate you sometimes
I don't want to fight you
And I don't wanna sleep in the dirt
We'll get the drinks in
So I'll get to thinking of her
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
Test of my patience
There's things that we'll never know
You sunshine, you temptress
My hand's at risk, I fold
Crisp trepidation
I'll try to shake this soon
Spreading you open
Is the only way of knowing you
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be a fine line
We'll be alright
We'll be alright
We'll be a fine line
We'll be a fine line
We'll be alright (alright, alright, alright)
We'll be alright
We'll be alright` },
    { title: "Blinding Lights", author: "The Weeknd", cover: "c3.jpg", lyrics: `Yeah
I've been tryna call
I've been on my own for long enough
Maybe you can show me how to love, maybe
I'm goin' through withdrawals
You don't even have to do too much
You can turn me on with just a touch, baby
I look around and
Sin City's cold and empty (oh)
No one's around to judge me (oh)
I can't see clearly when you're gone
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
I said, ooh, I'm drowning in the night
Oh, when I'm like this, you're the one I trust
(Hey, hey, hey)
I'm running out of time
'Cause I can see the sun light up the sky
So I hit the road in overdrive, baby, oh
The city's cold and empty (oh)
No one's around to judge me (oh)
I can't see clearly when you're gone
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
I said, ooh, I'm drowning in the night
Oh, when I'm like this, you're the one I trust
I'm just walking by to let you know (by to let you know)
I could never say it on the phone (say it on the phone)
Will never let you go this time (ooh)
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch
(Hey, hey, hey)
(Hey, hey, hey)
I said, ooh, I'm blinded by the lights
No, I can't sleep until I feel your touch` },
    { title: "We Dont Talk Anymore", author: "Charlie Puth", cover: "c4.jpg", lyrics: `We don't talk anymore
We don't talk anymore
We don't talk anymore
Like we used to do
We don't love anymore
What was all of it for?
Oh, we don't talk anymore
Like we used to do
I just heard you found the one you've been looking
You've been looking for
I wish I would have known that wasn't me
'Cause even after all this time, I still wonder
Why I can't move on
Just the way you did so easily
Don't wanna know
Kind of dress you're wearing tonight
If he's holding onto you so tight
The way I did before
I overdosed
Should've known your love was a game
Now I can't get you out of my brain
Oh, it's such a shame
That we don't talk anymore
We don't talk anymore
We don't talk anymore
Like we used to do
We don't love anymore
What was all of it for?
Oh, we don't talk anymore
Like we used to do
I just hope you're lying next to somebody
Who knows how to love you like me
There must be a good reason that you're gone
Every now and then I think you might want me to
Come show up at your door
But I'm just too afraid that I'll be wrong
Don't wanna know
If you're looking into her eyes
If she's holding onto you so tight
The way I did before
I overdosed
Should've known your love was a game
Now I can't get you out of my brain
Oh, it's such a shame
That we don't talk anymore
We don't talk anymore
We don't talk anymore
Like we used to do
We don't love anymore
What was all of it for?
Oh, we don't talk anymore
Like we used to do
Like we used to do
Don't wanna know
Kind of dress you're wearing tonight
If he's giving it to you just right
The way I did before
I overdosed
Should've known your love was a game
Now I can't get you out of my brain
Oh, it's such a shame
That we don't talk anymore
We don't talk anymore
We don't talk anymore
Like we used to do
We don't love anymore
What was all of it for?
Oh, we don't talk anymore
Like we used to do
We don't talk anymore (don't wanna know)
Kind of dress you're wearing tonight (oh)
If he's holding onto you so tight (oh)
The way I did before
We don't talk anymore (I overdosed)
Should've known your love was a game (oh)
Now I can't get you out of my brain (whoa)
Oh, it's such a shame
That we don't talk anymore` },
    { title: "Story of My Life", author: "One Direction", cover: "c5.jpg", lyrics: `Written in these walls are the stories that I can't explain
I leave my heart open but it stays right here empty for days
She told me in the morning she don't feel the same about us in her bones
It seems to me that when I die, these words will be written on my stone
And I'll be gone, gone tonight
The ground beneath my feet is open wide
The way that I been holdin' on too tight
With nothin' in between
The story of my life, I take her home
I drive all night to keep her warm
And time is frozen (the story of, the story of)
The story of my life, I give her hope
I spend her love until she's broke inside
The story of my life (the story of, the story of)
Written on these walls are the colors that I can't change
Leave my heart open, but it stays right here in its cage
I know that in the morning, I'll see us in the light up on the hill
Although I am broken, my heart is untamed still
And I'll be gone, gone tonight
The fire beneath my feet is burnin' bright
The way that I've been holdin' on so tight
With nothin' in between
The story of my life, I take her home
I drive all night to keep her warm
And time is frozen (the story of, the story of)
The story of my life, I give her hope
I spend her love until she's broke inside
The story of my life (the story of, the story of)
And I've been waiting for this time to come around
But, baby, runnin' after you is like chasin' the clouds
The story of my life, I take her home
I drive all night to keep her warm
And time is frozen
The story of my life, I give her hope (give her hope)
I spend her love until she's broke inside
The story of my life (the story of)
The story of my life
The story of my life (the story of, the story of)
The story of my life` },
    { title: "As It Was", author: "Harry Styles", cover: "c6.jpg", lyrics: `Holdin' me back
Gravity's holdin' me back
I want you to hold out the palm of your hand
Why don't we leave it at that?
Nothin' to say
When everything gets in the way
Seems you cannot be replaced
And I'm the one who will stay, oh
In this world, it's just us
You know it's not the same as it was
In this world, it's just us
You know it's not the same as it was
As it was, as it was
You know it's not the same
Answer the phone
"Harry, you're no good alone
Why are you sittin' at home on the floor?
What kind of pills are you on?"
Ringin' the bell
And nobody's comin' to help
Your daddy lives by himself
He just wants to know that you're well, oh
In this world, it's just us
You know it's not the same as it was
In this world, it's just us
You know it's not the same as it was
As it was, as it was
You know it's not the same
Go home, get ahead, light-speed internet
I don't wanna talk about the way that it was
Leave America, two kids follow her
I don't wanna talk about who's doin' it first
As it was
You know it's not the same as it was
As it was, as it was` },
    { title: "Save Your Tears", author: "The Weeknd", cover: "c7.jpg", lyrics: `na-na, yeah
I saw you dancing in a crowded room, uh
You look so happy when I'm not with you
But then you saw me, caught you by surprise
A single teardrop falling from your eye
I don't know why I run away
I'll make you cry when I run away
You could've asked me why I broke your heart
You could've told me that you fell apart
But you walked past me like I wasn't there
And just pretended like you didn't care
I don't know why I run away
I'll make you cry when I run away
Take me back 'cause I wanna stay
Save your tears for another
Save your tears for another day
Save your tears for another day
So
I made you think that I would always stay
I said some things that I should never say
Yeah, I broke your heart like someone did to mine
And now you won't love me for a second time
I don't know why I run away
Oh, girl
Said, I'll make you cry when I run away
Girl, take me back 'cause I wanna stay
Save your tears for another (uh)
I realize that I'm much too late
And you deserve someone better
Save your tears for another day (oh, yeah)
Save your tears for another day (yeah)
I don't know why I run away
I'll make you cry when I run away
Save your tears for another day
Ooh, girl (ah)
I said, save your tears for another day (ah)
Save your tears for another day (ah)
Save your tears for another day (ah)` },
    { title: "Lover", author: "Taylor Swift", cover: "c8.jpg", lyrics: `We could leave the Christmas lights up 'til January
And this is our place, we make the rules
And there's a dazzling haze, a mysterious way about you, dear
Have I known you 20 seconds or 20 years?
Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out, and take me home
You're my, my, my, my
Lover
We could let our friends crash in the living room
This is our place, we make the call
And I'm highly suspicious that everyone who sees you wants you
I've loved you three summers now, honey, but I want 'em all
Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out, and take me home (forever and ever)
You're my, my, my, my
Lover
Ladies and gentlemen, will you please stand?
With every guitar string scar on my hand
I take this magnetic force of a man to be my lover
My heart's been borrowed and yours has been blue
All's well that ends well to end up with you
Swear to be overdramatic and true to my lover
And you'll save all your dirtiest jokes for me
And at every table, I'll save you a seat, lover
Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out, and take me home (forever and ever)
You're my, my, my, my
Oh, you're my, my, my, my
Darling, you're my, my, my, my
Lover` },
    { title: "Drag Me Down", author: "One Direction", cover: "c9.jpg", lyrics: `I've got fire for a heart
I'm not scared of the dark
You've never seen it look so easy
I got a river for a soul
And baby, you're a boat
Baby, you're my only reason
If I didn't have you, there would be nothing left
The shell of a man that could never be his best
If I didn't have you, I'd never see the sun
You taught me how to be someone, yeah
All my life, you stood by me
When no one else was ever behind me
All these lights, they can't blind me
With your love, nobody can drag me down
All my life, you stood by me
When no one else was ever behind me
All these lights, they can't blind me
With your love, nobody can drag me down
Nobody, nobody (hey)
Nobody can drag me down
Nobody, nobody (hey)
Nobody can drag me down
I got fire for a heart
I'm not scared of the dark
You've never seen it look so easy
I got a river for a soul
And baby, you're a boat
Baby, you're my only reason
If I didn't have you there would be nothing left (nothing left)
The shell of a man who could never be his best (be his best)
If I didn't have you, I'd never see the sun (see the sun)
You taught me how to be someone, yeah
All my life, you stood by me
When no one else was ever behind me
All these lights, they can't blind me
With your love, nobody can drag me down
Nobody, nobody (hey)
Nobody can drag me down
Nobody, nobody (hey)
Nobody can drag me-
All my life, you stood by me
When no one else was ever behind me
All these lights, they can't blind me
With your love, nobody can drag me down
All my life, you stood by me
When no one else was ever behind me
All these lights, they can't blind me
With your love, nobody can drag me down
Nobody, nobody (hey)
Nobody can drag me down (yeah)
Nobody, nobody (hey)
Nobody can drag me down
Nobody, nobody (hey)
Nobody can drag me down
Nobody, nobody (hey)
Nobody can drag me down` },
    { title: "Watermelon Sugar", author: "Harry Styles", cover: "c10.jpg", lyrics: `Tastes like strawberries on a summer evenin'
And it sounds just like a song
I want more berries and that summer feelin'
It's so wonderful and warm
Breathe me in, breathe me out
I don't know if I could ever go without
I'm just thinking out loud
I don't know if I could ever go without
Watermelon sugar high, watermelon sugar high
Watermelon sugar high, watermelon sugar high
Watermelon sugar
Strawberries on a summer evenin'
Baby, you're the end of June
I want your belly and that summer feelin'
Getting washed away in you
Breathe me in, breathe me out
I don't know if I could ever go without
Watermelon sugar high, watermelon sugar high
Watermelon sugar high, watermelon sugar high
Watermelon sugar high, watermelon sugar high
Watermelon sugar high, watermelon sugar high
I just wanna taste it, I just wanna taste it
Watermelon sugar high
Tastes like strawberries on a summer evenin'
And it sounds just like a song
I want your belly and that summer feelin'
I don't know if I could ever go without
Watermelon sugar high, watermelon sugar high
Watermelon sugar (sugar) high, watermelon sugar high (sugar)
Watermelon sugar high, watermelon sugar high
Watermelon sugar high, watermelon sugar high
I just wanna taste it, I just wanna taste it (yeah)
Watermelon sugar high
I just wanna taste it, I just wanna taste it
Watermelon sugar high, watermelon sugar` },
    { title: "Starboy", author: "The Weeknd", cover: "c11.jpg", lyrics: `I'm tryna put you in the worst mood, ah
P1 cleaner than your church shoes, ah
Milli point two just to hurt you, ah
All red Lamb' just to tease you, ah
None of these toys on lease too, ah
Made your whole year in a week too, yeah
Main bitch outta your league too, ah
Side bitch out of your league too, ah
House so empty, need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face, man, I love my baby, ah
You talkin' money, need a hearing aid
You talkin' 'bout me, I don't see the shade
Switch up my style, I take any lane
I switch up my cup, I kill any pain
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
Every day a nigga try to test me, ah
Every day a nigga try to end me, ah
Pull off in that Roadster SV, ah
Pockets overweight, gettin' hefty, ah
Coming for the king, that's a far cry, ah
I come alive in the fall time, I
The competition, I don't really listen
I'm in the blue Mulsanne bumping New Edition
House so empty, need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face, man, I love my baby, ah
You talkin' money, need a hearing aid
You talkin' 'bout me, I don't see the shade
Switch up my style, I take any lane
I switch up my cup, I kill any pain
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
Let a nigga brag Pitt
Legend of the fall, took the year like a bandit
Bought mama a crib and a brand new wagon
Now she hit the grocery shop looking lavish
Star Trek roof in that Wraith of Khan
Girls get loose when they hear this song
A hundred on the dash get me close to God
We don't pray for love, we just pray for cars
House so empty, need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face, man, I love my baby, ah
You talkin' money, need a hearing aid
You talkin' 'bout me, I don't see the shade
Switch up my style, I take any lane
I switch up my cup, I kill any pain
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy` },
    { title: "Wildest Dreams", author: "Taylor Swift", cover: "c12.jpg", lyrics: `He said, "Let's get out of this town
Drive out of the city, away from the crowds"
I thought Heaven can't help me now
Nothing lasts forever
But this is gonna take me down
He's so tall and handsome as hell
He's so bad, but he does it so well
I can see the end as it begins
My one condition is
Say you'll remember me
Standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your wildest dreams, ah-ah, ha
Wildest dreams, ah-ah, ha
I said, "No one has to know what we do"
His hands are in my hair, his clothes are in my room
And his voice is a familiar sound
Nothing lasts forever
But this is getting good now
He's so tall and handsome as hell
He's so bad, but he does it so well
And when we've had our very last kiss
My last request is
Say you'll remember me
Standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just in your wildest dreams, ah-ah, ha (ha-ah, ha)
Wildest dreams, ah-ah, ha
You'll see me in hindsight
Tangled up with you all night
Burning it down
Someday when you leave me
I bet these memories
Follow you around
You'll see me in hindsight
Tangled up with you all night
Burning (burning) it (it) down (down)
Someday when you leave me
I bet these memories
Follow (follow) you (you) around (follow you around)
Say you'll remember me
Standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just pretend
Say you'll remember me
Standing in a nice dress
Staring at the sunset, babe
Red lips and rosy cheeks
Say you'll see me again
Even if it's just (pretend, just pretend) in your wildest dreams, ah-ah, ha (ah)
In your wildest dreams, ah-ah, ha
Even if it's just stayed in your wildest dreams, ah-ah, ha
In your wildest dreams, ah-ah, ha` }
  ];

  selectedAlbum: Album | null = null;
  isLyricsPage = false;

  showLyrics(album: Album) {
    this.selectedAlbum = album;
    this.isLyricsPage = true;
  }

  goBack() {
    this.isLyricsPage = false;
    this.selectedAlbum = null;
  }
}
