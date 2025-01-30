class Ap {
    void show1() {
        System.out.println("Class A");
    }
}

class Bp extends Ap {
    public void show2() {
        System.out.println("Class B");
    }
}

public class UpcastingDownCasting {
    public static void main(String[] args) {
        Ap obj1 = (Ap) new Bp();
        obj1.show1();
        Bp obj2 = (Bp) obj1;
        obj2.show2();

    }
}
