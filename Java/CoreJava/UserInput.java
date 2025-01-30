import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your name");
        String name = scanner.nextLine();
        System.out.println("hello" + name);
        System.out.println("Enter your age:");
        int age = scanner.nextInt();
        System.out.println("you are " + age + "years old");
        System.out.println("Enter your gpa:");
        double gpa = scanner.nextDouble();
        System.out.println("Your gpa is :" + gpa);

        System.out.println("are you a student:");
        boolean isStudent = scanner.nextBoolean();
        System.out.println("Student ?" + isStudent);


        scanner.close();

    }
}
