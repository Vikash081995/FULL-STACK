package CoreJava;

class A {
    public void show() {
        System.out.println("In A");
    }

    public void config() {
        System.out.println("In A config");
    }

    public int add(int i, int j) {
        return i + j;
    }
}

class B extends A {
    public void show() {
        System.out.println("In B");
    }

    public void config() {
        System.out.println("In B config");
    }

    public int add(int i, int j) {
        return i + j + 1;
    }
}

public class Overriding {
    public static void main(String[] args) {
        A obj = new A();
        obj.show();
        obj.config();
    }
}