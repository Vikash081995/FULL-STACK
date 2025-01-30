class Laptop {
    String model;
    int price;

    public String toString() {
        return model + " : " + price;
    }

    public boolean equals(Laptop that) {
        if (this.model.equals(that.model) && this.price == that.price) {
            return true;
        } else {
            return false;
        }
    }
}

public class ToString {
    public static void main(String[] args) {
        Laptop obj = new Laptop();
        obj.model = "Lenovo";
        obj.price = 20000;
        System.out.println(obj);

        Laptop obj2 = new Laptop();
        obj2.model = "Lenovo";
        obj2.price = 20000;

        boolean result = obj.equals(obj2);
        System.out.println(result);
    }
}