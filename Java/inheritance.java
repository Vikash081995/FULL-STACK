class A {

    public A() {
        super();
        System.out.println("A constructor");
    }

    public A(int n) {
        super();
        System.out.println("in a : " + n);
    }

}

class B extends A {

    public B() {
        super(); 
        System.out.println("B constructor");
    }

    public B(String s){
        this();
        System.out.println("in b " + s);

    }

    public B(int n) {
        super(n);
        System.out.println("in b " + n);
    }
}

public class inheritance {
    public static void main(String[] args) {
        B obj = new B("hello");

    }
}