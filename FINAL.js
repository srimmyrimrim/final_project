import ddf.minim.*;

AudioPlayer click;


Minim minim2;
String reset= "press anything to refresh";
String letter = " ";
int hue=0;
int bfill=0;
int black=0;
int black2=0;


void setup() {
  colorMode(HSB, 26);
  size(640, 640);
  smooth();
  textSize(32);
  minim2= new Minim(this);

  click= minim2.loadFile("163286__lockwert__mew-sample.wav");
}

void draw() {


  if (key=='.' || key== '!' || key=='?' || key==',' || key== ';' ) {
    bfill=0;
    black=0;
    black2=26;
    background(hue, bfill, 26);  
    fill(hue, black2, black);
  } else {
    background(hue, bfill, 26);
    fill(hue, black2, black);
  }
  text(letter, 0, 64, width, height);
}



void keyPressed() {
  if (key == BACKSPACE) {
    if (letter.length() > 0) {
      letter = letter.substring(0, letter.length() - 1);
      hue=0;
      bfill=0;
      black2=26;
      black=0;
    }
  } else {
    letter += key;
  }
  if ((key >= 'A' && key <= 'Z') || (key >= 'a' && key <= 'z')) {
    if (key<='Z') {
      hue=key-'A';
      bfill=26;
      black=26;
      black2=26;
    } else if (key<='z'&&key>='a') {
      hue=key-'a';
      bfill=26;
      black=26;
      black2=26;
    }
    click.rewind();
    click.play();
  }
}

