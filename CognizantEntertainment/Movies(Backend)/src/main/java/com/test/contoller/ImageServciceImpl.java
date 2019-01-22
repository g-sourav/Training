package com.test.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageServciceImpl implements ImageInterface {

	@Autowired
	private ImageRepo imageRepo;
	
	
	public boolean addArticle(MyFormData form) {
		// TODO Auto-generated method stub
		imageRepo.save(form);
		return false;
	}


	@Override
	public MyFormData getFormByTitle(String Tit) {
		// TODO Auto-generated method stub
		return imageRepo.findByTitle(Tit);
	}

	

}
