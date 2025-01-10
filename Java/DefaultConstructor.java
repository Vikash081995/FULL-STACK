class Human {
    private int age;
    private String name;

    public Human() {
        age = 12;
        name = "reddy";
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

public class DefaultConstructor {

    public static void main(String[] args) {
        Human obj = new Human();

        System.out.println(obj.getName() + ": " + obj.getAge());
        obj.setAge(30);
        obj.setName("reddy");
    }

}
