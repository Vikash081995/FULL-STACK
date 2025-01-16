package CoreJava;

class Humantype {
    private int age;
    private String name;

    public Humantype() { // default constructor
        age = 12;
        name = "reddy";
    }

    public Humantype(int age, String name) { // parameterized constructor
        this.age = age;
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

public class ParameterizedConstructor {

    public static void main(String[] args) {
        Humantype h1 = new Humantype();
        Humantype h2 = new Humantype(20, "reddy");
        System.out.println(h1.getAge() + " " + h1.getName());
        System.out.println(h2.getAge() + " " + h2.getName());
        // output: 12 reddy
        // 20 reddy
    }
}
