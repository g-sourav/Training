package com.test.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;



@Controller
@RequestMapping(value="MyMovies")
public class ImageController {
	@Autowired
	private ImageInterface imageService;
	@RequestMapping(value = "/upload",
            method = RequestMethod.POST)
	public ResponseEntity<MyFormData> SaveUsers(@RequestBody MyFormData r){
		
		imageService.addArticle(r);
		return new ResponseEntity<MyFormData>(r,HttpStatus.OK);


	}
	
	@PostMapping("mkmkbmvc")
	public ResponseEntity<Void> add(
//			@RequestParam("cast1image") MultipartFile cast1image,
//			@RequestParam("cast2image") MultipartFile cast2image,
//			@RequestParam("cast3image") MultipartFile cast3image,
//		@RequestParam("cast4image") MultipartFile cast4image,
			//@RequestParam("coverimage") MultipartFile coverimage,
			@RequestParam("cast1name") String cast1name,
			@RequestParam("cast2name") String cast2name,
			@RequestParam("cast3name") String cast3name,
			@RequestParam("cast4name") String cast4name,
			@RequestParam("coverimagetitle") String coverimagetitle,
			@RequestParam("rate") int rate,
			@RequestParam("theater") String theater,
			@RequestParam("title") String title) throws Exception{
		MyFormData form=new MyFormData();
		//form.setCast1image(cast1image.getBytes());
		form.setCast1name(cast1name);
		//form.setCast2image(cast2image.getBytes());
		System.out.println("Hii"+cast1name);
		form.setCast2name(cast2name);
		//form.setCast3image(cast3image.getBytes());
		form.setCast3name(cast3name);
		//form.setCast4image(cast4image.getBytes());
		form.setCast4name(cast4name);
		//form.setCoverimage(coverimage.getBytes());
		form.setCoverimagetitle(coverimagetitle);
		form.setTitle(title);
		form.setRate(rate);
		form.setTheater(theater);
		boolean flag=imageService.addArticle(form);
		if(flag==false){
		 return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	@GetMapping("{title}")
	public ResponseEntity<MyFormData> getFormByTitle(@PathVariable("title") String title){
		System.out.println("Hoiiiiii");
		MyFormData data=imageService.getFormByTitle(title);
		System.out.println(data.getCast3name());
		return new ResponseEntity<MyFormData>(data,HttpStatus.OK);
	}
	
}
