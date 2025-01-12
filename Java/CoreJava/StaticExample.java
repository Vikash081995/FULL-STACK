package CoreJava;
class Mobile {
    String brand;
    int price;
    // static variable is shared by all the objects of the class
    static String name;

    // static block is executed only once when the class is loaded
    static {
        name = "Mobile";
        System.out.println("Static block is executed");
    }

    public Mobile() {
        brand = "";
        price = 0;
        System.out.println("Constructor is executed");
    }

    public void show() {
        System.out.println(brand + " " + price + " " + name);
    }

    public static void show1(Mobile obj) {
        System.out.println(obj.brand + " " + obj.price + " " + name);
    }
}

public class StaticExample {
    public static void main(String[] args) {
        Mobile m1 = new Mobile();
        m1.brand = "Apple";
        m1.price = 100000;
        Mobile.name = "Iphone 13";
        m1.show();
        Mobile m2 = new Mobile();
        m2.brand = "Samsung";
        m2.price = 50000;
        Mobile.name = "Samsung S22";
        m2.show();
        Mobile.show1(m1);
    }
}