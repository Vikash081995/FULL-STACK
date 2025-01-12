package CoreJava;

class AInheritance {

    public AInheritance() {
        super();
        System.out.println("A constructor");
    }

    public AInheritance(int n) {
        super();
        System.out.println("in a : " + n);
    }

}

class BInheritance extends AInheritance {

    public BInheritance() {
        super();
        System.out.println("B constructor");
    }

    public BInheritance(String s) {
        this();
        System.out.println("in b " + s);

    }

    public BInheritance(int n) {
        super(n);
        System.out.println("in b " + n);
    }
}

public class inheritance {
    public static void main(String[] args) {
        BInheritance obj = new BInheritance("hello");

    }
}