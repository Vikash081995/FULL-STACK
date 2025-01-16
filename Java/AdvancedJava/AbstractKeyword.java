package AdvancedJava;

abstract class Car {
    public abstract void drive();

    public void playMusic() {
        System.out.println("play music");
    }
}

class WogrnR extends Car {
    @Override
    public void drive() {
        System.out.println("Drive safely");
    }
}

public class AbstractKeyword {
    public static void main(String[] args) {
        Car obj = new WogrnR();
        obj.drive();
        obj.playMusic();
    }
}
