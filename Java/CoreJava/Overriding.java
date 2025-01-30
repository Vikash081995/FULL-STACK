

class A2 {
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

class B2 extends A2 {
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
        A2 obj = new A2();
        obj.show();
        obj.config();
    }
}