public class Arithmetics {
    public static void main(String[] args) {
        //Arithmetic operations

        int x = 10;
        int y = 20;
        int z;
        int inc;

//        z= x+y;
//        z=x-y
        //z=x*y
        z = y / x;

        //Augmented Assignment operator
        x = x + y;
        //x-=y
        //x*=y

        //increment Decrement operator
        x++;
        inc = ++y;

        System.out.println("value of z is " + z); //2
        System.out.println("value of x is " + x); //31
        System.out.println("value of y is " + y); //21
        System.out.println("inc is " + inc); //21
    }
}