package com.onlineTest.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.onlineTest.Pojo.FilePojo;
import com.onlineTest.Pojo.ResultsPojo;
import com.onlineTest.Service.DBFileStorageService;
import com.onlineTest.Service.StudentService;
@CrossOrigin(origins="http://10.223.99.44:8080")
@Controller
@RequestMapping("admin")
public class AdminController {
	@Autowired
	private DBFileStorageService dbFileStorageService;
	@Autowired
	private StudentService studService;
	
	@RequestMapping("login")
	public String loginMethod(){
		System.out.println("inside login");
		return "login";
	}
	
	@PostMapping("upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) throws Exception {
		System.out.println("inside upload");
        dbFileStorageService.storeFile(file);
        return "login";
    }
	@GetMapping("show/{id}")
	@ResponseBody
	public List<FilePojo> showFileDetails(@PathVariable("id") String name){
		System.out.println("inside show file details");
		List<FilePojo> list=dbFileStorageService.getFileList(name);
//		ModelAndView modelAndView = new ModelAndView("showDetails");
//	    modelAndView.addObject("list", list);
//	    return modelAndView;
		
		return list;
	}
	@PostMapping("calculateResult/{test}/{username}")
	@ResponseBody
	public ResultsPojo calculateResult(@PathVariable("test") String testName,@PathVariable("username") String userName,@RequestBody String results[]){
		System.out.println(testName);
		System.out.println(userName);
		System.out.println("inside calculate");
		List<FilePojo> list=dbFileStorageService.getFileList(testName);
		int count=0,i=0, j=0;
		for(FilePojo file:list)
		{						
			if(results[i]!=null&&file.getAnswer().trim().equals(results[i]))				
				count++;
			if(results[i]!=null)
				j++;
			i++;
		}
		
		int result = (count*3)-((j-count)*1);
		System.out.println("Result is:"+result);
		
		ResultsPojo rPojo = new ResultsPojo();
		
		rPojo.setEmail(userName);
		rPojo.setEname(testName);
		rPojo.setMarks(result);
		
		return studService.insertResultsService(rPojo);
		
	}
}