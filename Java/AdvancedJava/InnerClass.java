package AdvancedJava;

class Ainner{
    int age;

    public void show(){
        System.out.println("in a show");
    }

    class Binner{
        public void config(){
            System.out.println("in b config");
        }
    }
}

public class InnerClass {
    public static void main(String[] args) {
        Ainner obj = new Ainner();
        obj.show();
        Ainner.Binner obj2 = obj.new Binner();  
        obj2.config();
    }
}
