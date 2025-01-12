package CoreJava;

class Anonymous {
    public Anonymous() {
        System.out.println("A");
    }

    public void show() {
        System.out.println("show");
    }
}

public class AnanoymousObject {
    public static void main(String[] args) {
        new Anonymous();
    }
}
