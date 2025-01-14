package CoreJava;
class A{
    void show1(){
        System.out.println("Class A");
    }
}

class B extends A{
    public void show2(){
            System.out.println("Class B");
    }
}



public class UpcastingDownCasting {
    public static void main(String[] args) {
        A obj1 =(A) new B();
        obj1.show1();
        B obj2 = (B) obj1;
        obj2.show2();
      
    }
}
