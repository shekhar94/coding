package multithreading;
import java.lang.Thread;


public class Thread2 {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                throw new RuntimeException("Internal Exception");
            }
        });

        thread.setName("Misbehaving thread");
        thread.setUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() {
            @Override public void uncaughtException(Thread thread, Throwable throwable) {
                System.out.println("A critical error happened in thread " + thread.getName() + " the error is " + throwable.getMessage());
            }
        });

        thread.start();
    }
}


//public class Thread2 {
//    public static void main(String[] args) throws InterruptedException {
//        Thread thread = new Thread(new Runnable() {
//            @Override
//            public void run() {
//                System.out.println("we are now in thread: " + Thread.currentThread().getName());
//                System.out.println("Current thread priority: " + Thread.currentThread().getPriority());
//            }
//        });
//
//        thread.setName("New worker thread");
//        thread.setPriority(Thread.MAX_PRIORITY);
//
//        System.out.println("we are in thread: " + Thread.currentThread().getName() + " before starting a new thread");
//        thread.start();
//        System.out.println("we are in thread: " + Thread.currentThread().getName() + " after starting a new thread");
//        Thread.sleep(10000);
//    }
//}

