import CoreJava.*;

public class Demo {
    public static void main(String[] args) {
        A obj = new A();
        obj.show();

        B obj1 = new B();
        // System.out.println(obj1.marks); // error bcz marks is private in B class
        System.out.println(obj1.roll);

    }

}
