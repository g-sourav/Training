package onlineTestApp;

import org.junit.Test;

import com.onlineTest.Pojo.StudentPojo;

import junit.framework.TestCase;

public class TestClass extends TestCase {
	StudentPojo studentPojoObj=new StudentPojo();
	@Test
	public void testMethod(){
		System.out.println("Test");
		studentPojoObj.printPojo();
	}
	@Test
	public void testMethod1(){
		System.out.println("Test1");
		studentPojoObj.printPojo();
	}
}
