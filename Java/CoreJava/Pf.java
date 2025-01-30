public class Pf {
    public static void main(String[] args) {
        // printf() function is used to print the formatted string.
        // %[flags][width][.precision]conversion-character
        String name = "Spongebob";
        char firstLetter = 'S';
        int age = 30;
        double height = 5.8;
        boolean isMarried = false;
       System.out.printf("Hello %s",name);
       System.out.printf("Your name starts with %c",firstLetter);
       System.out.printf("You are %d years old",age);
       System.out.printf("You are %.2f feet tall",height);
       System.out.printf("Are you married %b",isMarried);


       double p1 =9.99;
       double p2 = 100000.99;
       double p3 = -54000.99;
       System.out.printf("%,+.2f\n",p1);
       System.out.printf("%.2f\n",p2);
       System.out.printf("%.2f\n",p3);

       // 0 is used to fill the empty space with 0
       //number = right justified
       //negative number = left justified

       int id1=1;
       int id2=23;
       int id3=100;
       System.out.printf("%03d\n",id1);
       System.out.printf("%03d\n",id2);
       System.out.printf("%-4d\n",id3);

    }
}