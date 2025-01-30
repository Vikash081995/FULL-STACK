class Human {
    private int age = 11;
    private String name = "Bj";

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

public class Encap {
    public static void main(String[] args) {
        Human h1 = new Human();
        h1.setAge(0);
        h1.setName("Vj");
        System.out.println(h1.getAge() + " " + h1.getName());
        // output: 0 Vj
    }
}
