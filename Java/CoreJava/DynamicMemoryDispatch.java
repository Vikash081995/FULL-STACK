
class A1 {
    public void show() {
        System.out.println("in A");
    }
}

class B1 extends A1 {
    public void show() {
        System.out.println("in B");
    }

}

class C1 extends A1 {
    public void show() {
        System.out.println("in C");
    }
}

public class DynamicMemoryDispatch {
    public static void main(String[] args) {
        A1 obj = new A1();
        obj.show();
        obj = new B1();
        obj.show();
        obj = new C1();
        obj.show();

    }
}