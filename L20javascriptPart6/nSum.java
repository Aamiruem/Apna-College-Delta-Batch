public class nSum{
    public static int getSum(int n){
        int sum = 0;
        for(int i = 1; i <= n; i++){
            sum += i;
        }
        return sum;
    }
    public static void main(String[] args) {
        System.out.println("This is the n number of sum " + getSum(11));
    }
}
